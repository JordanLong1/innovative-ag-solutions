class SessionsController < ApplicationController 
    
    def create 
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password], params[:username])
            session[:user_id] = user.id 
            render json: user 
        else 
            render json: {error: "Username or password is incorrect", status: 404}
        end
    end

    def destroy 
        session.delete: user_id 

    end
end