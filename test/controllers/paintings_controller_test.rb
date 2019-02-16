require 'test_helper'

class PaintingsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get paintings_new_url
    assert_response :success
  end

  test "should get index" do
    get paintings_index_url
    assert_response :success
  end

  test "should get show" do
    get paintings_show_url
    assert_response :success
  end

end
