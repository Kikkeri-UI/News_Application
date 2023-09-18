export interface News {
    status: string
    totalResults: number
    results: Result[]
    nextPage: string
  }
  
  export interface Result {
    article_id: string
    title: string
    link: string
    keywords?: string[]
    creator?: string[]
    video_url: any
    description: string
    content: string
    pubDate: string
    image_url?: string
    source_id: string
    source_priority: number
    country: string[]
    category: string[]
    language: string
  }