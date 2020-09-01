class MessgesController < ApplicationController 


    def index 
        messages = Message.all 
        render json: messages
    end

    def show 
        message = Message.find_by(id: params[:id])
        render json: message 
    end

    def new 
        message = Message.new(message_params)
    end

    def create 
        message = Message.new(message_params)
        if message
            message.save 
            render json: message 
        else 
            render json: {error: "Invalid data please try again"}
        end
    end
    
    private 

    def message_params 
        params.require(:messages).permit(:content, :seen)
    end
end