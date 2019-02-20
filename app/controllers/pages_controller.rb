
class PagesController < ApplicationController
  def home
      @painting = Painting.new
  end
  def vote
    @paintings = Painting.order("RANDOM()").first(2)
  end
def top
    @paintings = Painting.all.order('points DESC').paginate(:page => params[:page], :per_page => 10)
    @pagenumber = params[:page]
    if @pagenumber != nil
    @startcount = (@pagenumber.to_i * 10) - 10
  else
    @startcount = 0
  end
end
end
