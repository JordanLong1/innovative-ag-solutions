class PcasController < UsersController  

    def index 
        pcas = Pca.all
        render json: pcas
    end

    def show 
        p = Pca.find_by(id: params[:id])
       
        if p.growers.count == 0 
            binding.pry
            render json: {error: "will this work?"}
            
        else  
            grower_info = p.growers
           crop = grower_info.map do |grower| 
                 grower.crop_infos.map do |crop| 
                    crop
                end
            end
            pca = crop << grower_info
            render json: pca
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

    def pca_params 
        params.require(:pca).permit(:id, :username, :first_name, :last_name, :email, :password, :type, :bio, :grower_id, :pca_id)

    end
end
