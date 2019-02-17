
class PagesController < ApplicationController
  def home
      @painting = Painting.new
  end
  def vote
    @paintings = Painting.order("RANDOM()").first(2)
  end
def top
    @paintings = Painting.all.order('points DESC').paginate(:page => params[:page], :per_page => 10)
end
end
