class CropInfo < ApplicationRecord

    belongs_to :grower

    validates :name, :description, :amount_of_acres, presence: true
    
end
