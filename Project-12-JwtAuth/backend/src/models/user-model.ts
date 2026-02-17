import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from '../types/type';

const UserSchema: Schema<User> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
  },
  { timestamps: true }
)

// Hash password before saving
UserSchema.pre<User>('save', async function () {
  if (!this.isModified('password')) return
  const pass = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, pass)
})

// Compare password method
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
}

export default mongoose.model<User>('User', UserSchema)