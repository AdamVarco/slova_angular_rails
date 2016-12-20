class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User
  
  devise :database_authenticatable, :recoverable,
         :trackable, :validatable, :registerable

  validates :email, presence: true
end
