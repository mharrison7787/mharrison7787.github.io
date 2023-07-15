<template>
    <div>
        <div class="compoent-container">
            <!-- Display current image -->
            <div class="thumbnail-container" @click="openSlideshow(0)">
                <img style="width: 400px" :src="currentImage" alt="Current Image" />
                <div class="caption" style="width: 200px">Guest Speaker events</div>
            </div>

            <!-- Slideshow modal -->
            <div v-if="showSlideshow" class="slideshow-modal" @click.self="closeSlideshow">
                <div class="slideshow-content">
                    <img :src="currentImage" alt="Slideshow Image" @click.stop="nextImage($event, 'next')" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            images: [
                {
                    thumbnail: require('../assets/Stephen.jpg'),
                    full: require('../assets/Stephen.jpg')
                },
                {
                    thumbnail: require('../assets/WebFx.jpg'),
                    full: require('../assets/WebFx.jpg')
                },
                {
                    thumbnail: require('../assets/killian.jpg'),
                    full: require('../assets/killian.jpg')
                },

            ],
            showSlideshow: false,
            currentImageIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentImageIndex].full;
        }
    },
    methods: {
        openSlideshow(index) {
            this.currentImageIndex = index;
            this.showSlideshow = true;
        },
        closeSlideshow() {
            this.showSlideshow = false;
        },
        nextImage(event, direction) {
            event.stopPropagation();
            if (direction === 'next') {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            } else {
                this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            }
        }
    }
};
</script>
  
<style>
.slideshow-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.slideshow-content {
    position: relative;
    max-width: 80%;
    max-height: 80%;
}

.slideshow-content img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: contain;
}

/* Optional: Add transition effects for smooth slideshow transitions */
.slideshow-content img {
    transition: transform 0.3s ease-in-out;
}

.slideshow-content img:hover {
    transform: scale(1.1);
}

.slide-deck div {
    width: 1;
    /* Adjust the width as per your desired size */
    height: 1;
    /* Adjust the height as per your desired size */
    cursor: pointer;
    /* Add any additional styling you need */
}

.compoent-container {
    display: flex;
}

.thumbnail-container {
    width: 10%;
    /* Adjust the width as per your desired size */
    cursor: pointer;
    /* Add any additional styling you need */
    padding: 50px;
}

.thumbnail-container img:hover {
    transform: scale(1.1);
}

.caption {
    padding-left: 100px;
    text-decoration: underline;
    text-align: bold;
}
</style>