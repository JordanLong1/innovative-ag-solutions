class Grower < User 
    belongs_to :pca
    has_many :messages
    has_many :crop_infos

end