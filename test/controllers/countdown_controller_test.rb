require "test_helper"

class CountdownControllerTest < ActionDispatch::IntegrationTest
  test "ルートページ表示" do
    root_url = root_path
    get root_url
    assert_response :success
  end
end
