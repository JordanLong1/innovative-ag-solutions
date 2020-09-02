class Message < ApplicationRecord
    # belongs_to :user
    belongs_to :grower 
    belongs_to :pca
end
