class ApplicationController < ActionController::API

       def current_user 
       begin 
        current_user ||= User.find_by(id: session[:user_id])

       rescue 
        return nil
       end
       end
         #saves a hit to the database


    def logged_in?
        !!current_user
    end


end
