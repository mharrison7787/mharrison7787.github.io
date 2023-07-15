<template>
    <div>
        <div class="bananana">
            <!-- Display current image -->
            <div class="thumbnail-container" @click="openSlideshow(0)">
                <img style="width: 400px" :src="currentImage" alt="Current Image" />
                <div class="caption" style="width: 400px; padding-left: 145px;">Workshop Events</div>
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
                    thumbnail: require('../assets/PXL_20220218_182004651-min.jpg'),
                    full: require('../assets/PXL_20220218_182004651-min.jpg')
                },
                {
                    thumbnail: require('../assets/PXL_20230401_181640062.jpg'),
                    full: require('../assets/PXL_20230401_181640062.jpg')
                },
                {
                    thumbnail: require('../assets/PXL_20230413_170239785.MP-2.jpg'),
                    full: require('../assets/PXL_20230413_170239785.MP-2.jpg')
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

/* .slideshow-content img:hover {
    transform: scale(1.1);
} */

.slide-deck div {
    width: 1;
    /* Adjust the width as per your desired size */
    height: 1;
    /* Adjust the height as per your desired size */
    cursor: pointer;
    /* Add any additional styling you need */
}

.bananana {
    display: flex;
    justify-content: flex-end;
    /* Move component to the right */
    width: 80%;
    /* Ensure the component takes up the full width */
}

.thumbnail-container {
    width: 10%;
    /* Adjust the width as per your desired size */
    cursor: pointer;
    /* Add any additional styling you need */
    padding: 50px;
}

/* .thumbnail-container img:hover {
    transform: scale(1.1);
} */

.caption {
    padding-left: 100px;
    text-decoration: underline;
    text-align: bold;
}
</style>