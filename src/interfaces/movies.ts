export interface InfoMovie {
  Title     :string,
  Year      :number,
  Rated     :string,
  Released  :string,
  Genre     :string,
  Director  :string,
  Actors    :string,
  Plot      :string,
  Language  :string,
  Poster    :string,
  imdbID    :string,
  data      :data
}

export interface Movies {
Poster: string,
Title : string,
Type  : string,
Year  : string,
imdbID: string
}

export interface ApiResponse {
  data: totalResults,
  status: number,
  statusText: string
}

interface totalResults {
  totalResults: string
  Search: Movies[]
}
interface data {
  Response?        : 'True'| 'False'| null,
  tototalResults?  : number | null

}