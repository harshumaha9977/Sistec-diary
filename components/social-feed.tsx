"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Users, TrendingUp, Plus, X } from "lucide-react"

interface Post {
  id: number
  author: string
  authorId: string
  avatar: string
  timestamp: string
  content: string
  category: string
  likes: number
  comments: number
  isLiked: boolean
  replies: Reply[]
}

interface Reply {
  id: number
  author: string
  authorId: string
  content: string
  timestamp: string
  likes: number
}

export default function SocialFeed() {
  const [activeTab, setActiveTab] = useState("feed")
  const [showPostForm, setShowPostForm] = useState(false)
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Priya Singh",
      authorId: "20CS002",
      avatar: "PS",
      timestamp: "2 hours ago",
      content:
        "Just finished the data structures assignment! Finally understood the concept of AVL trees. Who else found it tricky?",
      category: "Academic",
      likes: 24,
      comments: 8,
      isLiked: false,
      replies: [
        {
          id: 1,
          author: "Raj Kumar",
          authorId: "20CS001",
          content: "Same here! The rotation part was confusing at first.",
          timestamp: "1 hour ago",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      author: "Arjun Patel",
      authorId: "20CS003",
      avatar: "AP",
      timestamp: "4 hours ago",
      content: "Hostel dinner today was amazing! Big thanks to the mess team for the special biryani. Hats off! 👨‍🍳",
      category: "Hostel Life",
      likes: 45,
      comments: 12,
      isLiked: false,
      replies: [],
    },
    {
      id: 3,
      author: "Neha Verma",
      authorId: "20CS004",
      avatar: "NV",
      timestamp: "6 hours ago",
      content:
        "Exciting news! Inter-college cultural fest is happening next weekend. All students are welcome to participate. Register now!",
      category: "Event",
      likes: 67,
      comments: 18,
      isLiked: false,
      replies: [],
    },
    {
      id: 4,
      author: "Vikram Singh",
      authorId: "20CS005",
      avatar: "VS",
      timestamp: "8 hours ago",
      content:
        "Anyone interested in starting a coding club? Let's collaborate and build amazing projects together. DM me!",
      category: "Club",
      likes: 32,
      comments: 9,
      isLiked: false,
      replies: [],
    },
  ])

  const [newPost, setNewPost] = useState("")
  const [newPostCategory, setNewPostCategory] = useState("General")
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const categories = ["All", "Academic", "Hostel Life", "Event", "Club", "General"]

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: "You",
        authorId: "20CS001",
        avatar: "RK",
        timestamp: "just now",
        content: newPost,
        category: newPostCategory,
        likes: 0,
        comments: 0,
        isLiked: false,
        replies: [],
      }
      setPosts([post, ...posts])
      setNewPost("")
      setShowPostForm(false)
    }
  }

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-500/20 text-blue-700"
      case "Hostel Life":
        return "bg-purple-500/20 text-purple-700"
      case "Event":
        return "bg-pink-500/20 text-pink-700"
      case "Club":
        return "bg-green-500/20 text-green-700"
      default:
        return "bg-gray-500/20 text-gray-700"
    }
  }

  const filteredPosts = activeTab === "feed" ? posts : posts.filter((p) => p.category === activeTab)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">SISTec Connect</h2>
        <Button onClick={() => setShowPostForm(!showPostForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Create Post
        </Button>
      </div>

      {/* Create Post Form */}
      {showPostForm && (
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Create New Post</CardTitle>
              <Button size="sm" variant="ghost" onClick={() => setShowPostForm(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind? Share your thoughts with SISTec community..."
                className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Category</label>
              <select
                value={newPostCategory}
                onChange={(e) => setNewPostCategory(e.target.value)}
                className="w-full p-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1" onClick={handleCreatePost}>
                Post
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowPostForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tabs for Categories */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:grid-cols-6 bg-card border border-border overflow-x-auto">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="Academic">Academic</TabsTrigger>
          <TabsTrigger value="Hostel Life">Hostel</TabsTrigger>
          <TabsTrigger value="Event">Events</TabsTrigger>
          <TabsTrigger value="Club">Clubs</TabsTrigger>
          <TabsTrigger value="General">General</TabsTrigger>
        </TabsList>

        {/* Feed Tab */}
        <TabsContent value={activeTab} className="space-y-4">
          {filteredPosts.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No posts yet. Be the first to share!</p>
              </CardContent>
            </Card>
          ) : (
            filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card border-border hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <CardContent className="pt-6">
                  {/* Post Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{post.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="font-semibold text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                        </div>
                        <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border text-muted-foreground">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(post.id)
                      }}
                      className="flex items-center gap-2 hover:text-primary transition group"
                    >
                      <Heart
                        className={`w-5 h-5 transition ${post.isLiked ? "fill-red-500 text-red-500" : "group-hover:text-red-500"}`}
                      />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedPost(post.id)
                      }}
                      className="flex items-center gap-2 hover:text-primary transition"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>

                  {/* Show Replies if Selected */}
                  {selectedPost === post.id && post.replies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border space-y-3">
                      {post.replies.map((reply) => (
                        <div key={reply.id} className="flex gap-3 ml-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-primary">{reply.author.charAt(0)}</span>
                          </div>
                          <div className="flex-1 bg-input p-3 rounded-lg">
                            <p className="text-sm font-medium text-foreground">{reply.author}</p>
                            <p className="text-sm text-foreground mt-1">{reply.content}</p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                              <span>{reply.timestamp}</span>
                              <button className="hover:text-primary">Like</button>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Add Reply Input */}
                      <div className="flex gap-2 ml-4 mt-3">
                        <Input
                          placeholder="Write a reply..."
                          className="bg-input border-border text-foreground text-sm"
                        />
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Trending Sidebar */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { topic: "AVL Trees", posts: "234 posts" },
            { topic: "Hostel Life", posts: "189 posts" },
            { topic: "Cultural Fest", posts: "156 posts" },
            { topic: "Coding Club", posts: "142 posts" },
            { topic: "Placement News", posts: "128 posts" },
          ].map((trend, idx) => (
            <div
              key={idx}
              className="p-3 bg-input rounded-lg border border-border hover:bg-input/80 transition cursor-pointer"
            >
              <p className="font-medium text-foreground">{trend.topic}</p>
              <p className="text-xs text-muted-foreground">{trend.posts}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Users to Follow */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Suggested Users
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Dr. Rajesh Kumar", role: "Faculty", dept: "Computer Science" },
            { name: "Meera Sharma", role: "Student", dept: "B.Tech 3rd Year" },
            { name: "Amit Patel", role: "Student", dept: "B.Tech 2nd Year" },
          ].map((user, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-input rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{user.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {user.role} - {user.dept}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
