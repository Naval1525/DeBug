interface Author {
    name: string;
    reputation: number;
    avatar?: string;
  }

  interface Question {
    _id: string;
    title: string;
    body: string;
    votes: number;
    answers: number;
    views: number;
    tags: string[];
    author: Author;
    createdAt: string;
  }

