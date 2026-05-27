class CountdownController < ApplicationController
  def index
    @target_time = Time.new(2026, 11, 6, 0, 0, 0)
  end
end
