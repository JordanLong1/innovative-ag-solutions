class Grower < User 
    belongs_to :pca
    has_many :messages

end