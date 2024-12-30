class AbstractController {
    constructor(model) {
      if (!model) {
        throw new Error("A model instance is required for AbstractController");
      }
      this.model = model;
    }
  
    async readAll(req, res, next) {
      try {
        const items = await this.model.readAll();
        res.status(200).json(items);
      } catch (error) {
        next(error);
      }
    }
  
    async readOne(req, res, next) {
      try {
        const { id } = req.params;
        if (!id) {
          return res.status(400).json({ error: "ID parameter is required" });
        }
        const item = await this.model.readOne(id);
        if (item) {
          return res.status(200).json(item);
        } else {
          return res.status(404).json({ error: "Item not found" });
        }
      } catch (error) {
        next(error);
      }
    }
  
    async create(req, res, next) {
      try {
        const data = req.body;
        const newItem = await this.model.create(data);
        res.status(201).json(newItem);
      } catch (error) {
        next(error);
      }
    }
  
    async update(req, res, next) {
      try {
        const { id } = req.params;
        const data = req.body;
        if (!id) {
          return res.status(400).json({ error: "ID parameter is required" });
        }
        const existingItem = await this.model.readOne(id);
        if (!existingItem) {
          return res.status(404).json({ error: "Item not found" });
        }
        const updatedItem = await this.model.edit(data, id);
        res.status(200).json(updatedItem);
      } catch (error) {
        next(error);
      }
    }
  
    async delete(req, res, next) {
      try {
        const { id } = req.params;
        if (!id) {
          return res.status(400).json({ error: "ID parameter is required" });
        }
        const existingItem = await this.model.readOne(id);
        if (!existingItem) {
          return res.status(404).json({ error: "Item not found" });
        }
        await this.model.deleteOne(id);
        res.status(204).end();
      } catch (error) {
        next(error);
      }
    }
  }
  
  module.exports = AbstractController;
  