const mongoose = require("mongoose");

const benefitSchema = new mongoose.Schema({
  subtitle: { type: String, required: true },
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
});

const miniTabfeatSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const tabfeatSchema = new mongoose.Schema({
  subtitle: { type: String, required: true },
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
  mini: [miniTabfeatSchema],
});

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const navLinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const statsSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const brandSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const testimonialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const exploreSchema = new mongoose.Schema({
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
});

const dataSchema = new mongoose.Schema({
  aboutus: { type: String, required: true },
  mission: { type: String, required: true },
  vision: { type: String, required: true },
  feautures: { type: String, required: true },
  tagline: { type: String, required: true },
  descriptions: { type: String, required: true },
  benefits: [benefitSchema],
  tabfeau: [tabfeatSchema],
  faq: [faqSchema],
  navLinks: [navLinkSchema],
  stats: [statsSchema],
  brand_paragraph: { type: String, required: true },
  brands: [brandSchema],
  testimonial: [testimonialSchema],
  explore: exploreSchema,
  short_desc: { type: String, required: true },
});

const promptSchema = new mongoose.Schema({
  title: { type: String, required: true },
  data: dataSchema,
  savedIndex: { type: Number, required: true },
});



const Prompt = new mongoose.model("Prompt", promptSchema);

module.exports = Prompt;
