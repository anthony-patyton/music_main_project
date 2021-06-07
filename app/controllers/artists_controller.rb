class ArtistsController < ApplicationController
  # follow the pattern
  # change Model_name -> @parent.model_names
  # before_action :set_parent
  # private
  #   def set_parent
  #     @parent = Parent.find(params[:id])
  #   end
  before_action :set_bill_board
  before_action :set_artist, only: [:show, :edit, :update, :destroy]

  def index
    @artists = @bill_board.artists
    render component: 'Artists', props: { artists: @artists, bill_board: @bill_board }
  end

  def show
    render component: 'Artist', props: { artist: @artist, bill_board: @billboard }
  end

  def new
    @artist = @bill_board.artists.new
    render component: 'ArtistNew', props: { artist: @artist, bill_board: @bill_board }
  end

  def create
    @artist = @bill_board.artists.new(artist_params)
    if @artist.save
      redirect_to root_path
      # redirect_to bill_board_artists_path(params[:id])
    else
      render component: 'ArtistNew', props: { artist: @artist, bill_board: @bill_board }
    end
  end
  
  def edit
    render component: 'ArtistEdit', props: { artist: @artist, bill_board: @bill_board }
  end

  def update
    if @artist.update(artist_params)
      redirect_to root_path
    else
      render component: 'ArtistEdit', props: { artist: @artist, bill_board: @bill_board}
    end
  end

  def destroy
    @artist.destroy
    redirect_to root_path
  end
  
  private
    def set_bill_board
      @bill_board = BillBoard.find(params[:bill_boards])
    end

    def set_artist
      @artist = Artist.find(params[:id])
      # @artist = @bill_board.artists.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:name, :about, :age)
    end
end
