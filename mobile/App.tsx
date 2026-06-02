
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [activeRole, setActiveRole] = useState<string>("student");
  const [showLoginDrawer, setShowLoginDrawer] = useState<boolean>(false);
  const [loginRole, setLoginRole] = useState<string | null>(null);
  const [loginMethod, setLoginMethod] = useState<"id" | "mobile">("id");
  const [captcha, setCaptcha] = useState<string>("");
  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [formData, setFormData] = useState({
    id: "",
    mobile: "",
    password: "",
    dateOfBirth: ""
  });

  const roles = [
    { id: "student", label: "Student" },
    { id: "teacher", label: "Teacher" },
    { id: "admin", label: "Admin" },
    { id: "warden", label: "Warden" },
    { id: "guard", label: "Guard" },
    { id: "mess", label: "Mess Admin" },
  ];

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    // Validate captcha
    if (captchaInput !== captcha) {
      Alert.alert("Error", "Invalid captcha! Please try again.");
      generateCaptcha();
      return;
    }
    
    // Validate required fields
    if (loginMethod === "id" && !formData.id) {
      Alert.alert("Error", "Please enter your ID");
      return;
    }
    if (loginMethod === "mobile" && !formData.mobile) {
      Alert.alert("Error", "Please enter your mobile number");
      return;
    }
    if (!formData.password) {
      Alert.alert("Error", "Please enter your password");
      return;
    }
    if (!formData.dateOfBirth) {
      Alert.alert("Error", "Please enter your date of birth");
      return;
    }
    
    setActiveRole(loginRole || "student");
    setCurrentPage("dashboard");
    setShowLoginDrawer(false);
    setLoginRole(null);
    setCaptchaInput("");
  };

  const resetForm = () => {
    setFormData({ id: "", mobile: "", password: "", dateOfBirth: "" });
    setCaptchaInput("");
  };

  const LoginForm = () => (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>{loginRole?.toUpperCase()} LOGIN</Text>
      
      {/* Login Method Toggle */}
      <View style={styles.methodToggle}>
        <TouchableOpacity
          style={[styles.methodButton, loginMethod === "id" && styles.methodButtonActive]}
          onPress={() => setLoginMethod("id")}
        >
          <Text style={[styles.methodText, loginMethod === "id" && styles.methodTextActive]}>ID Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.methodButton, loginMethod === "mobile" && styles.methodButtonActive]}
          onPress={() => setLoginMethod("mobile")}
        >
          <Text style={[styles.methodText, loginMethod === "mobile" && styles.methodTextActive]}>Mobile Login</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      {loginMethod === "id" ? (
        <TextInput
          style={styles.input}
          placeholder={`Enter your ${loginRole} ID`}
          value={formData.id}
          onChangeText={(text) => setFormData({...formData, id: text})}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChangeText={(text) => setFormData({...formData, mobile: text})}
          keyboardType="phone-pad"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(text) => setFormData({...formData, password: text})}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your date of birth (DD/MM/YYYY)"
        value={formData.dateOfBirth}
        onChangeText={(text) => setFormData({...formData, dateOfBirth: text})}
      />

      {/* Captcha Section */}
      <View style={styles.captchaContainer}>
        <Text style={styles.captchaLabel}>Security Code:</Text>
        <View style={styles.captchaDisplay}>
          <Text style={styles.captchaText}>{captcha}</Text>
          <TouchableOpacity onPress={generateCaptcha} style={styles.refreshButton}>
            <Text style={styles.refreshText}>↻</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter captcha"
          value={captchaInput}
          onChangeText={setCaptchaInput}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => setLoginRole(null)}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );

  const Dashboard = () => (
    <ScrollView style={styles.dashboardContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SISTec Diary</Text>
        <Text style={styles.headerSubtitle}>{activeRole.toUpperCase()}</Text>
      </View>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeText}>Welcome to SISTec Diary</Text>
        <Text style={styles.welcomeSubtext}>
          {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)} Dashboard - Enhanced with Mobile Login & Captcha Security
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => setCurrentPage("home")}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresGrid}>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Enhanced Security</Text>
          <Text style={styles.featureText}>Mobile Login + Captcha + Date of Birth verification</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Multi-Role Access</Text>
          <Text style={styles.featureText}>Student, Teacher, Admin, Warden, Guard, Mess Admin</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>College ERP</Text>
          <Text style={styles.featureText}>Attendance, Fees, Academics, Hostel Management</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Mobile Optimized</Text>
          <Text style={styles.featureText}>Works perfectly on all mobile devices</Text>
        </View>
      </View>
    </ScrollView>
  );

  const HomePage = () => (
    <ScrollView style={styles.homeContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>SISTec Diary</Text>
          <Text style={styles.heroSubtitle}>College ERP & Hostel Management</Text>
          <Text style={styles.heroDescription}>
            Complete digital solution with Enhanced Security Features
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Enhanced Features</Text>
          
          <View style={styles.featureHighlight}>
            <Text style={styles.highlightTitle}>🔐 Enhanced Security</Text>
            <Text style={styles.highlightText}>Mobile Number Login + Captcha Verification + Date of Birth</Text>
          </View>

          <View style={styles.featureHighlight}>
            <Text style={styles.highlightTitle}>👥 Multi-Role System</Text>
            <Text style={styles.highlightText}>Student, Teacher, Admin, Warden, Guard, Mess Admin</Text>
          </View>

          <View style={styles.featureHighlight}>
            <Text style={styles.highlightTitle}>🏫 Complete ERP</Text>
            <Text style={styles.highlightText}>Attendance, Fees, Academics, Hostel, Gate Pass, Mess</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButtonMain} onPress={() => setShowLoginDrawer(true)}>
          <Text style={styles.loginButtonMainText}>Login with Enhanced Security</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {currentPage === "home" && <HomePage />}
      {currentPage === "dashboard" && <Dashboard />}
      
      {showLoginDrawer && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Login</Text>
              <TouchableOpacity onPress={() => setShowLoginDrawer(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            {!loginRole ? (
              <ScrollView style={styles.roleList}>
                {roles.map((role) => (
                  <TouchableOpacity
                    key={role.id}
                    style={styles.roleItem}
                    onPress={() => setLoginRole(role.id)}
                  >
                    <Text style={styles.roleText}>{role.label}</Text>
                    <Text style={styles.roleSubtext}>Login to your {role.label} account</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              <LoginForm />
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  safeArea: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
  },
  heroSection: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#6366f1',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1f2937',
  },
  featureHighlight: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6366f1',
  },
  highlightText: {
    fontSize: 14,
    color: '#6b7280',
  },
  loginButtonMain: {
    backgroundColor: '#10b981',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  loginButtonMainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dashboardContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: '#6366f1',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 5,
  },
  welcomeCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 25,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1f2937',
  },
  welcomeSubtext: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  featureCard: {
    backgroundColor: 'white',
    width: '48%',
    padding: 15,
    margin: '1%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6366f1',
  },
  featureText: {
    fontSize: 12,
    color: '#6b7280',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  roleList: {
    maxHeight: 300,
  },
  roleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  roleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  roleSubtext: {
    fontSize: 14,
    color: '#6b7280',
  },
  loginContainer: {
    padding: 10,
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6366f1',
  },
  methodToggle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  methodButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  methodButtonActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  methodText: {
    color: '#6b7280',
    fontWeight: 'bold',
  },
  methodTextActive: {
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  captchaContainer: {
    marginBottom: 20,
  },
  captchaLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#374151',
  },
  captchaDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  captchaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
    letterSpacing: 2,
  },
  refreshButton: {
    backgroundColor: '#6366f1',
    padding: 8,
    borderRadius: 6,
  },
  refreshText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#6b7280',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
