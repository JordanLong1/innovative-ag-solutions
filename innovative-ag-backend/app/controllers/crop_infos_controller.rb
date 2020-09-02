class CropInfosController < ApplicationController 

    def index 
        crop_infos = CropInfo.all 
        render json: crop_infos
    end

    def show 
        crop_info = CropInfo.find(id: params[:id])
        render json: crop_info
    end

    def new
        crop_info = CropInfo.new(crop_info_params)
    end
    
    def create
        crop_info = CropInfo.new(crop_info_params)
        if crop_info
            crop_info.save
            render json: crop_info 
        else 
            render json: {error: "Something went wrong, please try again"}
        end

    end

    def edit
        crop_info = CropInfo.find(id: params[:id])
    end

    def update 
        crop_info = CropInfo.find_by(id: params[:id])
        if crop_info
            crop_info.update(crop_info_params)
            render json: crop_info 
        else 
            render json: {error: "Invalid data please try again"}

        end
        
    end



    private 

    def crop_info_params
        params.require(:crop_info).permit(:name, :description, :amount_of_acres)
    end
end