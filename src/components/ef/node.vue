<template>
  <div
    ref="node"
    :style="nodeContainerStyle"
    @click="clickNode"
    @mouseup="changeNodeSite"
    :class="nodeContainerClass"
  >
    <div class="el-node-top">
      <i class="el-icon-delete" @click="deleteElement"></i>
    </div>
    <!-- 最左侧的那条竖线 -->
<!--    <div class="ef-node-left"></div>-->
    <!-- 节点类型的图标 -->
    <div class="ef-node-left-ico flow-node-drag">
      <i :class="nodeIcoClass"></i>
    </div>
    <!-- 节点名称 -->
    <div class="ef-node-text" :show-overflow-tooltip="true">
      <div class="ef-node-tag-wrap">
        <el-tag v-for="tag in node.tags" :key="tag" style="margin-right: 2px;">{{ tag }}</el-tag>
      </div>
      <div v-html="node.name"></div>
    </div>
    <!-- 节点状态图标 -->
    <div v-if="!isLastNode" class="ef-node-right-ico" @click="shrinkNode">
      <i v-show="!isShrink" class="el-icon-minus"></i>
      <i v-show="isShrink" class="el-icon-plus"></i>
<!--      <i class="el-icon-circle-check el-node-state-success" v-show="node.state === 'success'"></i>-->
<!--      <i class="el-icon-circle-close el-node-state-error" v-show="node.state === 'error'"></i>-->
<!--      <i class="el-icon-warning-outline el-node-state-warning" v-show="node.state === 'warning'"></i>-->
<!--      <i class="el-icon-loading el-node-state-running" v-show="node.state === 'running'"></i>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: Object,
    activeElement: Object,
    isLastNode: Boolean
  },
  data () {
    return {
      isShrink: false
    }
  },
  computed: {
    nodeContainerClass () {
      return {
        'ef-node-container': true,
        'ef-node-active': this.activeElement.type === 'node' ? this.activeElement.nodeId === this.node.id : false
      }
    },
    // 节点容器样式
    nodeContainerStyle () {
      return {
        top: this.node.top,
        left: this.node.left,
        background: this.node.background
      }
    },
    nodeIcoClass () {
      var nodeIcoClass = {}
      nodeIcoClass[this.node.ico] = true
      // 添加该class可以推拽连线出来，viewOnly 可以控制节点是否运行编辑
      nodeIcoClass['flow-node-drag'] = !this.node.viewOnly
      return nodeIcoClass
    }
  },
  methods: {
    // 点击节点
    clickNode () {
      this.$emit('clickNode', this.node.id)
    },
    // 鼠标移动后抬起
    changeNodeSite () {
      // 避免抖动
      if (this.node.left === this.$refs.node.style.left && this.node.top === this.$refs.node.style.top) {
        return
      }
      this.$emit('changeNodeSite', {
        nodeId: this.node.id,
        left: this.$refs.node.style.left,
        top: this.$refs.node.style.top
      })
    },
    deleteElement () {
      this.$emit('deleteElement')
    },
    shrinkNode () {
      this.isShrink = !this.isShrink
      this.$emit('shrinkNode', this.node.id)
    }
  }
}
</script>
