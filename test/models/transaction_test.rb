# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  quantity   :string           not null
#  stock_id   :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  unit_price :float            not null
#

require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
