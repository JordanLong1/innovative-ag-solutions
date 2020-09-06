class SessionsController < ApplicationController 
    
    def create 
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id 
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