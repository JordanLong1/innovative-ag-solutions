class SessionsController < ApplicationController 
    
    def create 
        binding.pry
        user = User.find_by(email: params[:user][:email])
        binding.pry
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id 
            binding.pry
            resp = {
                user: user.user_serializer
            }
            render json: user 
        else 
           resp = {
               error: "Error test change later"
           }
            render json: {error: "Username or password is incorrect", status: 404}
        end
    end

    def destroy 
       session.clear

       render json: {
           message: "Successfully cleared logout"         
       }

    end
end