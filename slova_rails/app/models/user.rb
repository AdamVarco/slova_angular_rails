class User < ApplicationRecord
  def self.from_token_payload(payload)
    find_or_create_by(
      email: payload['email'],
      auth0_id_string: payload['sub']
    )
  end
end
