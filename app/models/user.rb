class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User
  
  devise :database_authenticatable, :recoverable,
         :trackable, :validatable, :registerable

  validates :email, presence: true

  def send_on_create_confirmation_instructions
    return "Welcome to Slova."
    # send_devise_notification(:confirmation_instructions)
  end 
end
