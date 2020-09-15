class Pca < User 
    has_many :growers
    has_many :messages

   
    #  scope :users, -> {where(:type => 'Grower') } 
       
end