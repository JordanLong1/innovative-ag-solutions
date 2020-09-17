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
        grower = Grower.find_by(id: params[:grower_id])
       new_crop = CropInfo.new(crop_info_params)
      crop_info = grower.crop_infos.build(crop_info_params)
        if crop_info
            crop_info.save!

            render json: crop_info 
        else 
            render json: {error: "Something went wrong, please try again"}
        end

    end
    
    private 

    def crop_info_params
        params.require(:crop_info).permit(:id, :name, :description, :amount_of_acres, :grower_id)
    end
end