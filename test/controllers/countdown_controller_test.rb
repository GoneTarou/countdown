require "test_helper"

class CountdownControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    root_url = root_path
    get root_url
    assert_response :success
  end
end
