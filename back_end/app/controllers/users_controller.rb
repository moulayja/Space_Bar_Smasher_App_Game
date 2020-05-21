class UsersController < ApplicationController

    # =============================== { Display all users } =================================

    
    def index
        @users = User.all
        render json: @users
    end


    # =============================== { Display each user id } =================================

    def show
        @user = User.find(params[:id])
        render json: @user
    end


    # =============================== { Create a user } =================================


    def create
        @user = User.create(user_params)
        render json: @user

    end
    # =============================== { Update a user } =================================



    def update
        @user = User.find(params[:id])
        render json: @user
    end

    # =============================== {Delete a user} =================================


    def destroy
        User.destory(params[:id])
    end

    # =============================== {Login a user} =================================


    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            token = token(user_id: @user.id)
           render json: {user: UserSerializer.new(@user), token: token}
        else
            render json: {error: "PLEASE TRY AGAIN"}
        end
    end

    private 

    def  user_params
        params.require(:user).permit(:username, :password_digest)
    end



# ==============================











# ================================





end
