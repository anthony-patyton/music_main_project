class BillBoardsController < ApplicationController
  
  before_action :set_bill_board, only: [:show, :edit, :update]
  def index
    @bill_boards = BillBoard.all
    render component: 'BillBoards', props: { bill_boards: @bill_boards }
  end
  
  def show
    render component: 'BillBoard', props: { bill_board: @bill_board }
  end

  def new
    @bill_board = BillBoard.new
    render component: 'BillBoardNew', props: { bill_board: @bill_board }
  end

  def edit
    if @bill_board.save
      redirect_to root_path
    else
      render component: 'BillBoardEdit', props: { bill_board: @bill_board}
    end
  end

  def create
    @bill_board = BillBoard.new(bill_board_params)
    if @bill_board.save
      redirect_to root_path
    else
      render component: 'BillBoardNew', props: { bill_board: @bill_board }
    end
  end

  def update
    if @bill_board.update(bill_board_params)
      redirect_to root_path
    else
      render component: 'BillBoardEdit', props: { bill_board: @bill_board }
    end
  end

  def destroy
    BillBoard.find(params[:id]).destroy
    redirect_to root_path
  end

  private
  # { bill_board: { title: 'ksjdflaj;s'}}
  # check data and protects from sql injection SELECT*FROMUSER's
    def bill_board_params
      params.require(:bill_board).permit(:title, :body)
    end

    def set_bill_board
      @bill_board = BillBoard.find(params[:id])
    end
end
