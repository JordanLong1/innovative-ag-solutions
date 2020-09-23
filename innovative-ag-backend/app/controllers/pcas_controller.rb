class PcasController < UsersController  

    def index 
        pcas = Pca.all
        render json: pcas
    end

    def show 
        # p = Pca.find_by(id: params[:id])
       
        # if p.growers.count == 0 
          
        #     render json: {error: "You need your growers to sign up and load their crops."}
            
        # else  
        #     grower_info = p.growers
        #    crop = grower_info.map do |grower| 
        #          grower.crop_infos.map do |crop| 
        #             crop
        #         end
        #     end
        #     pca = crop << grower_info
        #     render json: pca
        # end
        
        p = Pca.find_by(id: params[:id])
        if p.growers.count == 0 
            render json: {error: "You need your groweto sign up and load their crops."}
        else
          pca_accounts_info = growers_and_crops(p)
          render json: pca_accounts_info
        end

    end

    def new 
        pca = Pca.new(pca_params)
    end

    def create 
        pca = Pca.new(pca_params) 
        if pca 
            pca.save 
            render json: pca
        else 
            render json: {error: "Invalid entry, please try again Salesman!"}
        end
    end

    private 

    def growers_and_crops(pca)
        all_grower_and_crop_info = []
        pca.growers.each do |grower|
          grower = {grower_info: grower, crops: grower.crop_infos}
          all_grower_and_crop_info << grower
        end
        all_grower_and_crop_info
      end

    def pca_params 
        params.require(:pca).permit(:id, :username, :first_name, :last_name, :email, :password, :type, :bio, :grower_id, :pca_id)

    end
end
