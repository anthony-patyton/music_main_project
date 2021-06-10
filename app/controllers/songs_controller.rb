class SongsController < ApplicationController
  before_action :set_artist 
  before_action :set_song, only: [:show, :edit, :update, :destroy]

  def index
    @songs = @artist.songs
    render component: 'Songs', props: { songs: @songs, artist: @artist }
  end

  def show
    render component: 'Song', props: { song: @song, artist: @artist }
  end

  def new
    @song = @artist.songs.new
    render component: 'SongNew', props: { song: @song, artist: @artist }
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to [@artist, @song]
    else
      render component: 'SongNew', props: { song: @song, artist: @artist }
    end
  end

  def edit
    render component: 'SongEdit', props: { song: @song, artist: @artist }
  end

  def update
    if @song.update(song_params)
      redirect_to artist_songs_path(@artist)
    else
      render component: 'SongEdit', props: { song: @song, artist: @artist}
    end
  end

  def destroy
    @song.destroy
    redirect_to artist_songs_path(@artist)
  end

  private
    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def set_song
      @song = Artist.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:title, :body)
    end
end
