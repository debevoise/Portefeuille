# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  company    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ticker     :string           not null
#

require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
