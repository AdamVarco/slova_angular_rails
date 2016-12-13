class Translation < ApplicationRecord
    before_save { self.display ||= self.target }
    before_save { self.times_correct ||= 0}
    before_save { self.times_incorrect ||= 0 }
end