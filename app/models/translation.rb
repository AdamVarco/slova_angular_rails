class Translation < ApplicationRecord
  belongs_to :user
  validates_presence_of :native
  validates_presence_of :target

    before_save { self.display ||= self.target }
    before_save { self.times_correct ||= 0}
    before_save { self.times_incorrect ||= 0 }
end
