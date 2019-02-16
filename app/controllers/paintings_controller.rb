class PaintingsController < ApplicationController
  before_action :find_painting, only: %i[show edit update]

  def new
    @painting = Painting.new
      end

  def create
    @painting = Painting.new(painting_params)
    @painting.points = 0
    if @painting.save
      redirect_to painting_path(@painting)
    else
      render 'new'
      msg = @painting.errors.full_messages
      flash.now[:error] = msg
    end
  end

  def edit; end

  def update
    if @painting.update(painting_params)
      @painting.increment(:points, 1)
      @painting.save!
      p 'painting successfully updated'
      redirect_to painting_path(@painting)
    else
      msg = @painting.errors.full_messages
      flash.now[:error] = msg
      redirect_back(fallback_location: root_path)
    end
end

  def show
    @painting = Painting.find(params[:id])
  end

  def index
    @paintings = Painting.all.order('created_at DESC').paginate(:page => params[:page], :per_page => 12)
  end

  def destroy
    @painting = Painting.find(params[:painting_id])
    @painting.destroy
    redirect_to register_path
end

  private

  def painting_params
    params.fetch(:painting, Hash.new).permit(:title, :artist, :points, :color1, :color2, :color3, :color4, :coords1, :coords2, :coords3)
  end

  def find_painting
    @painting = Painting.find(params[:id])
 end
end
