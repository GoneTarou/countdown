require "application_system_test_case"

class CountdownsTest < ApplicationSystemTestCase
  test "タイトルが表示される" do
    visit "/"
    assert_text "78期Aクラス卒業まで"
  end
end
