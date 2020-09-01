class User < ApplicationRecord
    

    has_many :messages
    has_secure_password

    def as_json(options={})
    super(options.merge({:methods => :type}))
  end

end
