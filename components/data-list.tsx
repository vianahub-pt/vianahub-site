"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"
import { useClientData } from "@/hooks/use-client-data"

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface DataItem {
  id: number
  title: string
  description: string
  author: string
}

export function DataList() {
  const { data, loading, error, refetch } = useClientData<DataItem>({
    url: "https://jsonplaceholder.typicode.com/posts?_limit=9",
    transform: (posts: Post[]) =>
      posts.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.body.substring(0, 120) + "...",
        author: `Usuário ${post.userId}`,
      })),
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Carregando dados...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-red-600">Erro ao carregar dados</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={refetch} className="w-full">
            <RefreshCw className="h-4 w-4 mr-2" />
            Tentar Novamente
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Lista de Posts</h2>
        <Button onClick={refetch} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Atualizar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card key={item.id} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              <CardDescription>Por {item.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
