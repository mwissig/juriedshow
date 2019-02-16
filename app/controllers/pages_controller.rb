
class PagesController < ApplicationController
  def home
      @painting = Painting.new
  end
  def vote
    @paintings = Painting.order("RANDOM()").first(2)
  end

end
