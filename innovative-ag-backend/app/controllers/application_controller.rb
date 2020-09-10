class ApplicationController < ActionController::API

       def current_user 
        current_user ||= User.find_by(id: session[:user_id])
         #saves a hit to the database
    end

    def logged_in?
        !!current_user
    end


end
