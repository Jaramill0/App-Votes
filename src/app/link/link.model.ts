export class Link {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  votesup() {
    this.votes++;
  }
  votesdown() {
    this.votes--;
  }
}
