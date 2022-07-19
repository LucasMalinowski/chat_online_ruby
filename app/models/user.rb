class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 50 }
  validates :email, presence: true,
                    confirmation: true,
                    length: { maximum: 255 },
                    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i },
                    unique: true
  validates :password, presence: true, length: { minimum: 8, maximum: 25 }

  validate :password_complexity

  def password_complexity
    if password.present? && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,25}$/)
      errors.add :password, "Deve ter pelo menos uma letra maiúscula, uma minúscula e um número"
    end
  end

end
