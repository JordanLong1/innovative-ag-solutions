class User < ApplicationRecord
    has_secure_password 

    has_many :messages

    def as_json(options={})
    super(options.merge({:methods => :type}))
  end
  
end
