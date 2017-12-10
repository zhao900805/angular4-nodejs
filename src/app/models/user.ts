export class User {

    avatar_url:string;
    url:string;
    login:string;
    id:number;
    score:number;
    html_url:string;
    followers_url:string;
    following_url:string;
    subscriptions_url:string;
    organizations_url:string;
    repos_url:string;
    received_events_url:string;
    blog:string;
    location:string;
    email:string;
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
    created_at:string;
    updated_at:string;
    comment:string;
    tags:string[];

    constructor(avatar_url:string,url:string,login:string,id:number,score:number,
                html_url:string,followers_url:string,following_url:string,subscriptions_url:string,
                organizations_url:string,repos_url:string,received_events_url:string,
                blog:string,location:string,email:string,public_repos:number,public_gists:number,
                followers:number,following:number,created_at:string,updated_at:string,tags:string[]
    ){
        this.avatar_url = avatar_url;
        this.url = url;
        this.login = login;
        this.id = id;
        this.score = score;
        this.html_url = html_url;
        this.followers_url = followers_url;
        this.following_url = following_url;
        this.subscriptions_url = subscriptions_url;
        this.organizations_url = organizations_url;
        this.repos_url = repos_url;
        this.received_events_url = received_events_url;
        this.blog = blog;
        this.location = location;
        this.email =email;
        this.public_repos = public_repos;
        this.public_gists = public_gists;
        this.followers = followers;
        this.following = following;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.comment = null;
        this.tags = tags;
    }
}
