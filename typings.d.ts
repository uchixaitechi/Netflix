export interface Genre {
    id: number,
    name:string
}
export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids:number[]
    id: number
    name: string
    orign_country: string
    orign_language: string
    orign_name: string
    overwiev: string
    popularity: number
    poster_path: string
    vote_avarage: number
    vote_count:number
}
export interface Element {
    type:
        | 'Bloopers'
        | 'Featurete'
        | 'Behind the Scenes'
        | 'Clip'
        | 'Trailer'
        | 'Teaser'
}